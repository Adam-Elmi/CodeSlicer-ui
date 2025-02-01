import './App.css';
import icon from "./assets/upload.png";

function App() {
  return (
    <main>
    <div className="file-container">
        <label htmlFor="file-input" className="upload-area">
            <div className="image-container">
                <img src={icon} alt="Upload-Image" className="upload-image"/>
            </div>
            <span className="notify-text">Click here to upload a file.</span>
            <span className="notify-text">Current supported files: <span className="supported-files">js</span></span>
        </label>
        <input type="file" name="file-input" id="file-input" style={{display: "none"}}/>
        {/* Where file info appear */}
        <div className="file-area">
            <div className="file-extension">
                <span className="extension">#</span>
            </div>
            <div className="file-info">
                <h3 className="file-name">empty</h3>
                <span className="file-size">0 size</span>
            </div>
        </div>
       </div>
   </main>
  )
}
  
export default App
