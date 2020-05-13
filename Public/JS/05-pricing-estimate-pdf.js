var doc = new jsPDF();

doc.text('Price Quote - Order 00001', 10, 20);
doc.text('Frame 1 - Order 00001', 10, 30);
    
    doc.text('Sizing', 10, 50);
        doc.text('Art Dimensions (Inches):', 10, 60);
        doc.text('Mat Size (Inches):', 10, 70);
        doc.text('Float Size (Inches):', 10, 80);
        doc.text('Face Width (Inches):', 10, 90);
        doc.text('Frame Depth (Inches):', 10, 100);
        doc.text('Inner Frame Window Size (Inches):', 10, 110);
        doc.text('Frame Dimensions (Inches):', 10, 120);
    
        doc.text('Manufacturing', 10, 140);
        doc.text('Frame Build:', 10, 150);
            doc.text('- Material:', 10, 160);
            doc.text('- Finish:', 10, 170);
            doc.text('- Finish Option:', 10, 180);
        doc.text('Manufacturing Notes:', 10, 190);

    doc.text('Fitting', 10, 210);
        doc.text('Mat:', 10, 220);
        doc.text('Float:', 10, 230);
        doc.text('Spacer:', 10, 240);
        doc.text('Mounting:', 10, 250);
        doc.text('Glazing:', 10, 260);
        doc.text('Strainer:', 10, 270);
        doc.text('Extras:', 10, 280);
        doc.text('Other Extras Per Frame:', 10, 290);
        doc.text('Fitting Notes:', 10, 300);

    doc.text('Pricing', 10, 320);
        doc.text('Oversize Amount:', 10, 330);
        doc.text('Frame Subtotal:', 10, 340);
    
    doc.text('Total Order Pricing', 10, 360);
        doc.text('Rush Amount:', 10, 370);
        doc.text('Tax Rate Percentage:', 10, 380);
        doc.text('Tax Amount:', 10, 390);
        doc.text('Total Order Cost:', 10, 400);
    

doc.save('a4.pdf')