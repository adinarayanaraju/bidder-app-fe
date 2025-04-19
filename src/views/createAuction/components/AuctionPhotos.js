import React, { useRef } from "react";
import { Label } from "reactstrap";
import uploadIcon from "../../../assets/icons/upload.svg";
import deleteIcon from "../../../assets/icons/white_delete.svg";
import dummyImage from "../../../assets/icons/warning.svg";
import { CONSTANT_NAME } from "../../../utils/propertyResolver";
import { showToast } from "../../../sharedComponents/toast/showTaost";
import { uploadFileViaPresignedUrl } from "../../../utils/commonFunction";
export default function AuctionPhotos() {
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);

    try {
      for (const file of files) {
        const isValidType = CONSTANT_NAME.AUCTION_PHOTO_VALIDATION.includes(
          file.type
        );
        const isValidSize = file.size < CONSTANT_NAME.AUCTION_PHOTO_MAX_SIZE;

        if (!isValidType) {
          const errorMessage = `${file.name} is not a valid file type.`;
          showToast(errorMessage, "warning");
          continue;
        }

        if (!isValidSize) {
          const errorMessage = `${file.name} is too large.`;
          showToast(errorMessage, "warning");
          continue;
        }

        try {
          // File is valid, try uploading
          const fileUploadInfo = await uploadFileViaPresignedUrl(file);
          console.log("upload file info", fileUploadInfo);
        } catch (uploadErr) {
          // Handle upload-specific error via toast
          showToast(uploadErr.message || "File upload failed", "error");
        }
      }
    } catch (err) {
      // Catch anything unexpected
      showToast(err.message || "Unexpected error", "error");
    }

    // Reset input so same file can be re-uploaded
    e.target.value = "";
  };

  return (
    <div className="auction-photos-wrapper">
      <Label className="form-label">
        Add product photos (min 3)
        <span className="text-danger ms-1">*</span>
      </Label>
      <div className="image-wrapper d-flex gap-4 flex-wrap">
        <div className="upload-file">
          <div className="upload-box" onClick={handleFileClick}>
            <img src={uploadIcon} alt="" />
            <p>Upload a photo</p>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              hidden
              ref={fileInputRef}
              accept=".jpg,.jpeg,.png"
            />
          </div>
          <div className="photo-validation mt-2">
            <p className="max-size m-0 mb-1">Max Size: 25MB</p>
            <p className="allow-info m-0">JPG, PNG only</p>
          </div>
        </div>
        <div className="single-photo">
          <div className="image-container">
            <img src={dummyImage} alt="" className="main-image" />
            <div className="delete-icon">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
          <p className="single-photo-name m-0 mb-1 ">xyz name.jpg</p>
          <p className="single-photo-size m-0">24MB</p>
        </div>
      </div>
    </div>
  );
}
