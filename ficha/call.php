
<?php
    include_once($_SERVER['DOCUMENT_ROOT']."/config.php");
    include_once($_SERVER['DOCUMENT_ROOT']."/db.php");
        $value = $_REQUEST['value'];
        $key = $_REQUEST['key'];
        $Id = $_REQUEST['Id'];
        function atu($value,$key,$Id){
        abre_bd();
        $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
        $array = array("0"=>"Idade",
        "1"=>"Aparencia",
        "2"=>"Fruta",
        "3"=>"Raça",
        "4"=>"Classe",
        "5"=>"EstilodeLuta",
        "6"=>"StausForça",
        "7"=>"StausDestreza",
        "8"=>"StausConstituição",
        "9"=>"StausInteligência",
        "10"=>"StausSabedoria",
        "11"=>"StausCarisma",
        "12"=>"StausHaki",
        "13"=>"VidaMax",
        "14"=>"VidaAtual",
        "15"=>"Ifecção",
        "16"=>"Historia",
        "17"=>"Beris",
        "18"=>"Inventário",
        "19"=>"Nome",
        "20"=>"Player",
        "21"=>"EstaminaAtual",
        "22"=>"EstaminaMax",
        "23"=>"Anotacao"
                        
        );
        $slqe = "update personagens set ".$array[$key]." = '".trim($value)."' where ID =".$Id."";
        if ($conn->query($slqe) === TRUE) {
            echo "Record updated successfully";
          } else {
            echo "Error updating record: " . $conn->error;
          }
        echo "<script>console.log(".$slqe.");</script>";
        fecha_db($conn);}
        atu($value,$key,$Id);
?>