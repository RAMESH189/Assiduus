import "./invoice.css";
import { useState } from "react";
import Modal from "react-modal";
import BarChart from "./BarChart";

export default function Invoice({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const handlePopUp = () => {
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };
  const handleFileUpload = (event) => {
    console.log("File uploaded:", event.target.files[0]);
    closePopUp();
  };

  return (
    <div className="invoice">
      <div className="invoiceWrapper">
        <div className="invoiceTop">
          <div className="invoiceTopLeft">
            <span className="headingInvoice">Invoice owned by you</span>
          </div>
          <div className="invoiceTopRight">
            <button onClick={handlePopUp} className="invoiceButton">
              New sales invoice
            </button>
            <Modal
              className="invoiceModal"
              isOpen={isOpen}
              onRequestClose={closePopUp}
              contentLabel="File Upload Modal"
            >
              <div className="modalWrapper">
                <h2>Upload Sales Invoice</h2>
                <input
                  className="modalInput"
                  type="file"
                  accept=".pdf, .doc, .docx, .txt"
                  onChange={handleFileUpload}
                />
                <button className="modalClose" onClick={closePopUp}>
                  Cancel
                </button>
              </div>
            </Modal>
          </div>
        </div>
        <hr />
        <div className="InvoiceCenter">
          <BarChart data={data} />
        </div>
      </div>
    </div>
  );
}
