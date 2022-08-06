export const numberFormat = (number, decimals, dec_point, thousands_sep='.') => {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
        dec = typeof dec_point === 'undefined' ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};

export const Terbilang = (a) => {

        var bilangan = ['','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan','Sepuluh','Sebelas'];

        // 1 - 11
        if(a < 12){
            var kalimat = bilangan[a];
        }
        // 12 - 19
        else if(a < 20){
            var kalimat = bilangan[a-10]+' Belas';
        }
        // 20 - 99
        else if(a < 100){
            var utama = a/10;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%10;
            var kalimat = bilangan[depan]+' Puluh '+bilangan[belakang];
        }
        // 100 - 199
        else if(a < 200){
            var kalimat = 'Seratus '+ Terbilang(a - 100);
        }
        // 200 - 999
        else if(a < 1000){
            var utama = a/100;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%100;
            var kalimat = bilangan[depan] + ' Ratus '+ Terbilang(belakang);
        }
        // 1,000 - 1,999
        else if(a < 2000){
            var kalimat = 'Seribu '+ Terbilang(a - 1000);
        }
        // 2,000 - 9,999
        else if(a < 10000){
            var utama = a/1000;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%1000;
            var kalimat = bilangan[depan] + ' Ribu '+ Terbilang(belakang);
        }
        // 10,000 - 99,999
        else if(a < 100000){
            var utama = a/100;
            var depan = parseInt(String(utama).substr(0,2));
            var belakang = a%1000;
            var kalimat = Terbilang(depan) + ' Ribu '+ Terbilang(belakang);
        }
        // 100,000 - 999,999
        else if(a < 1000000){
            var utama = a/1000;
            var depan = parseInt(String(utama).substr(0,3));
            var belakang = a%1000;
            var kalimat = Terbilang(depan) + ' Ribu '+ Terbilang(belakang);
        }
        // 1,000,000 - 	99,999,999
        else if(a < 100000000){
            var utama = a/1000000;
            var depan = parseInt(String(utama).substr(0,4));
            var belakang = a%1000000;
            var kalimat = Terbilang(depan) + ' Juta '+ Terbilang(belakang);
        }
        else if(a < 1000000000){
            var utama = a/1000000;
            var depan = parseInt(String(utama).substr(0,4));
            var belakang = a%1000000;
            var kalimat = Terbilang(depan) + ' Juta '+ Terbilang(belakang);
        }
        else if(a < 10000000000){
            var utama = a/1000000000;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%1000000000;
            var kalimat = Terbilang(depan) + ' Milyar '+ Terbilang(belakang);
        }
        else if(a < 100000000000){
            var utama = a/1000000000;
            var depan = parseInt(String(utama).substr(0,2));
            var belakang = a%1000000000;
            var kalimat = Terbilang(depan) + ' Milyar '+ Terbilang(belakang);
        }
        else if(a < 1000000000000){
            var utama = a/1000000000;
            var depan = parseInt(String(utama).substr(0,3));
            var belakang = a%1000000000;
            var kalimat = Terbilang(depan) + ' Milyar '+ Terbilang(belakang);
        }
        else if(a < 10000000000000){
            var utama = a/10000000000;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%10000000000;
            var kalimat = Terbilang(depan) + ' Triliun '+ Terbilang(belakang);
        }
        else if(a < 100000000000000){
            var utama = a/1000000000000;
            var depan = parseInt(String(utama).substr(0,2));
            var belakang = a%1000000000000;
            var kalimat = Terbilang(depan) + ' Triliun '+ Terbilang(belakang);
        }

        else if(a < 1000000000000000){
            var utama = a/1000000000000;
            var depan = parseInt(String(utama).substr(0,3));
            var belakang = a%1000000000000;
            var kalimat = Terbilang(depan) + ' Triliun '+ Terbilang(belakang);
        }

      else if(a < 10000000000000000){
            var utama = a/1000000000000000;
            var depan = parseInt(String(utama).substr(0,1));
            var belakang = a%1000000000000000;
            var kalimat = Terbilang(depan) + ' Kuadriliun '+ Terbilang(belakang);
        }

        var pisah = kalimat.split(' ');
        var full = [];
        for(var i=0;i<pisah.length;i++){
         if(pisah[i] != ""){full.push(pisah[i]);}
        }
        return full.join(' ');
};
