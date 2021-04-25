<?php

 header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
//echo $_POST["test"];




$data = json_decode(file_get_contents('php://input'), true);

if ($data["passcode"] == "***") {

if (strlen($data["TEXT"]) < 5000) {

$url = 'http://192.168.1.116/j9880i3bcv/index.php';
//echo $data["starttext"];
$horrah = array('legalese' => $data["TEXT"], 'key2' => 'value2');

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($horrah)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if ($result === FALSE) { /* Handle error */ }
echo $result;
//var_dump($result);



//echo exec("python /var/www/html/test.py" . " " . $data["starttext"]);
}
} else {

echo "Incorrect password. Los Altos judges: the password is in the Discord.";
exit();
}
?>
