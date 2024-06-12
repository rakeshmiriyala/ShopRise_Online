import React, { useState, useRef, useEffect } from "react";
import Quagga from "quagga";

const App = () => {
  const [file, setFile] = useState(null);
  const [scannedResult, setScannedResult] = useState("");
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (cameraEnabled) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [cameraEnabled]);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL("image/jpeg");

    Quagga.decodeSingle(
      {
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
          ],
        },
        locate: true,
        src: imageDataURL,
      },
      (result) => {
        if (result && result.codeResult) {
          setScannedResult(result.codeResult.code);
        } else {
          setScannedResult("No barcode detected");
        }
      },
      (error) => {
        console.error("Error decoding barcode:", error);
      }
    );
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => setFile(event.target.files[0])}
      />
      {file && (
        <img src={URL.createObjectURL(file)} alt="Selected" width="300" />
      )}
      <p>Scanned Barcode from Image: {scannedResult}</p>

      <button onClick={() => setCameraEnabled(!cameraEnabled)}>
        {cameraEnabled ? "Disable Camera" : "Enable Camera"}
      </button>

      {cameraEnabled && (
        <div>
          <video ref={videoRef} style={{ width: "100%" }}></video>
          <button onClick={handleCapture}>Capture and Scan</button>
        </div>
      )}
    </div>
  );
};

export default App;
