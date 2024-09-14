<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina do Ximbinha</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
    include "index.php";
    ?>

    <!-- topo da pagina -->
    <div class="container-fluid">
        <h1>Logo</h1>
    <?php
    echo "<p> Data: " .$date. " Hora Local: " .$hora. "</p>";
    ?>
    </div>
    <!-- conteudo da pagina -->
    <div class="container">
        <form action="" method="POST">
            <label for="">Peso:</label>
            <input type="number" name="peso">
            <br>
            <label for="">Altura:</label>
            <input type="number" name="altura">
            <br>
            <input type="submit" value="IMC">
            <?php
                $peso=0.0;
                $alt=0.0;
                $imc=0.0;
                if(isset($_POST['peso']) && isset($_POST['altura']){
                    $peso=$_POST['peso'];
                    $alt=$_POST['altura'];
                    $imc=$peso/$alt*$alt;
                    echo "IMC:" .$imc;
                }
            ?>
        </form>
    </div>
    <!-- footer da pagina -->
    <div class="container-fluid">
        <p><a href="">Bnits Design</a> | Todos os Direitos Reservados  &copy;</p>
    </div>
</body>
</html>