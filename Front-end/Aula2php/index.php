<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela de Login</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <form action="" method="GET">
        <div class="formulario">
            <label for="">
                Usário:
            </label>
            <input type="text" name="user" placeholder="Usuário">
        </div>
        <div class="formulario">
            <label for="">
                Senha
            </label>
            <input type="password" name="pass" placeholder="*************">
        </div>
        <input type="submit" value="LOGIN">
    </form>
<?php
        date_default_timezone_set('America/Sao_Paulo');
            $date=date('d/m/Y');
            $hora=date('H:i');
        
        $user="";   
        $pass="";

    if(isset($_GET['user']) && (isset($_GET['pass']))){

        $user=$_GET['user'];    
        $pass=$_GET['pass'];    
        
        echo "Usuário:" .$user. " Senha:".$pass;
        
        if($user == "senai" && $pass=="Senai123"){
        
            header('location:ximbinha.php');
        
        } else {
        
            echo "Entrada não Autorizada";
        
        } 
        
    } 

?>
</body>
</html>