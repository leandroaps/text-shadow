import React, {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
    var rn = Math.floor((Math.random() * 150) + 60);
var rs = Math.floor((Math.random() * 11) + 4);
	var t = new window.Trianglify({
 x_gradient: window.Trianglify.colorbrewer.Spectral[rs],
    noiseIntensity: 0,
    cellsize: rn
});
var pattern = t.generate(window.innerWidth, window.innerWidth+200);
document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
    
  }, [])
  return (
    <div className="content">
     <h1>leandroaps</h1>
    </div>
  );
}

export default App;
