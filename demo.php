<?php
echo "hello world and {$_POST['name']}";
 ?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <form action="index.html" method="GET">
     <input type="text" name="name" value="deep">
     <input type="submit" name="demo" value="send to index">
   </form>
 </html>
