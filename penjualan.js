function hitung() {
    var harga=document.getElementById("Harga").nodeValue;
    var jumlah=document.getElementById("Jumlah").nodeValue;

    var hasil= harga*jumlah;
    document.getElementById("Total").value=hasil;

    if(hasil<250000){
        diskon=0;
        document.getElementById("Diskon").value="tidak dapat diskon";
    }else{
        diskon=.2;
        document.getElementById("Diskon").value="20%";
    }


    var totalbayar=hasil*diskon;
    bayar=hasil-totalbayar
    document.getElementById("Bayar").value=bayar;
    
}