import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import imgPDF from '../../images/pdf.png';
import jsPDF from 'jspdf';
import './style.scss';

class HtmlToPdf extends Component {

  ocultarElementos = () => {
    const elements = document.getElementsByClassName('no-print');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.visibility = 'hidden';
    }
  }

  mostrarElementos = () => {
    const elements = document.getElementsByClassName('no-print');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.visibility = 'visible';
    }
  }

  convertHtmlToPdf(e) {
    this.ocultarElementos();
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);  // if you want see your screenshot in body.
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF("p", "mm", "a4");

      var imgWidth = pdf.internal.pageSize.getWidth(); 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("CV - Matías Morón - Full stack developer.pdf");
      document.body.removeChild(canvas);
      this.mostrarElementos();
    });
  }

  render() {
    return (
      <div
        className="print no-print"
        onClick={this.convertHtmlToPdf.bind(this)}>
        <img src={imgPDF} className='' alt="pdf"/>
      </div>
    );
  }
}

export default HtmlToPdf;