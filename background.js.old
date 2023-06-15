function captureAndCompare() {
  chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
    const img = new Image();
    img.onload = function () {
      const imgCanvas = document.createElement('canvas');
      const imgContext = imgCanvas.getContext('2d');
      imgCanvas.width = img.width;
      imgCanvas.height = img.height;
      imgContext.drawImage(img, 0, 0);

      const imageData = imgContext.getImageData(0, 0, imgCanvas.width, imgCanvas.height).data;

      let grayscale = '';
      for (let i = 0; i < imageData.length; i += 4) {
        const [r, g, b] = imageData.slice(i, i + 3);
        const average = Math.round((r + g + b) / 3);
        grayscale += String.fromCharCode(average);
      }

      const dct = new DCT2D(imgCanvas.width, imgCanvas.height);
      const dctData = dct.forward(grayscale);

      let median = 0;
      for (let i = 1; i < dctData.length; i++) {
        median += dctData[i];
      }
      median /= (dctData.length - 1);

      let hash = '';
      for (let i = 1; i < dctData.length; i++) {
        hash += dctData[i] > median ? '1' : '0';
      }

      const hardcodedHash = '01010101010101010101010101010101'; // Replace with your hardcoded hash

      if (hash === hardcodedHash) {
        console.log('Page is similar.');
      } else {
        console.log('Page is not similar. ' + hash + ' vs ' + hardcodedHash);
      }
    };

    img.src = dataUrl;
  });
}

chrome.browserAction.onClicked.addListener(captureAndCompare);

