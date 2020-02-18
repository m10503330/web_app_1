$(function(){
    var ASCIICode = "0 NUT 32 (space) 64 @ 96 \、 1 SOH 33 ! 65 A 97 a 2 STX 34 \" 66 B 98 b 3 ETX 35 # 67 C 99 c 4 EOT 36 $ 68 D 100 d 5 ENQ 37 % 69 E 101 e 6 ACK 38 & 70 F 102 f 7 BEL 39 , 71 G 103 g 8 BS 40 ( 72 H 104 h 9 HT 41 ) 73 I 105 i 10 LF 42 * 74 J 106 j 11 VT 43 + 75 K 107 k 12 FF 44 , 76 L 108 l 13 CR 45 - 77 M 109 m 14 SO 46 . 78 N 110 n 15 SI 47 / 79 O 111 o 16 DLE 48 0 80 P 112 p 17 DCI 49 1 81 Q 113 q 18 DC2 50 2 82 R 114 r 19 DC3 51 3 83 S 115 s 20 DC4 52 4 84 T 116 t 21 NAK 53 5 85 U 117 u 22 SYN 54 6 86 V 118 v 23 TB 55 7 87 W 119 w 24 CAN 56 8 88 X 120 x 25 EM 57 9 89 Y 121 y 26 SUB 58 : 90 Z 122 z 27 ESC 59 ; 91 [ 123 { 28 FS 60 < 92 / 124 | 29 GS 61 = 93 ] 125 } 30 RS 62 > 94 ^ 126 ` 31 US 63 ? 95 _";
    var ASCIICode_list = ASCIICode.split(" ");
    var ASCIICode_list_code = [];
    for (var i=0;i<ASCIICode_list.length;i+=2){    
        if(ASCIICode_list[i]<33){

        }else{
        ASCIICode_list_code.push([ASCIICode_list[i],ASCIICode_list[i+1]]);    
        }
    }
    ASCIICode_list_code.sort((a,b)=> a[0] - b[0]);
    for (var i=0;i<ASCIICode_list_code.length;i++){    
        $(".translist").append("<li>"+ASCIICode_list_code[i][0]+" : "+ASCIICode_list_code[i][1]+"</li>")
    }

    function findCode(letter){
        for(var i=0 ;i<ASCIICode_list_code.length;i++)
        {

            if (ASCIICode_list_code[i][1]==letter){
                return ASCIICode_list_code[i][0]+' ';
            }
        }
        return letter;
    }
    function findletter(code){
        for(var i=0 ;i<ASCIICode_list_code.length;i++)
        {
            
            if (ASCIICode_list_code[i][0]==code){
                return ASCIICode_list_code[i][1];
            }
        }
        return code;
    }
    
    function translateToASCTT(list){
        var result='';
        for (var i=0;i<list.length;i++){
            result+=findCode(list[i]);
        }
        return result;
    }

    function translateToEng(list){
        list=list.split(' ');
        var result='';
        for (var i=0;i<list.length;i++){
            result+=findletter(list[i]);
        }
        return result;
    }
    $("#btnASCII").click(function(){
        var input = $('#input').val();
        var result = translateToASCTT(input);
        $('#output').val(result);
        // $('#output').css({
        //     backgroundColor:'#ff7575'
        // }).animation({
        //     backgroundColor:'transparent'
        // },500);
    })
    $("#btnEng").click(function(){
        var output = $('#output').val();
        var result = translateToEng(output);
        $('#input').val(result);
    })
    $('#input').keyup(function(){
        $('#input').val($('#input').val().split(" ").join(""));
    })
})




