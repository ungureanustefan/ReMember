import React, { Component } from "react";
class Images extends Component {
  constructor(props) {
    super(props);
  }

  readURL = () => {
    if (this.fileInput.files && this.fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.props.onImgAdd(e.target.result);
      };
      reader.readAsDataURL(this.fileInput.files[0]);
    }
  };

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          hidden="hidden"
          ref={(fileInput) => (this.fileInput = fileInput)}
          onChange={this.readURL}
        />

        <button
          className="images"
          id="upload"
          onClick={() => this.fileInput.click()}
        >
          Add Image
        </button>
      </div>
    );
  }
}

export default Images;
