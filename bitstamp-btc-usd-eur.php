<?php
/**
 * The Bitstamp API does not include an Access Control header, so we have to proxy the response.
 */

$TICKER_URL_USD = 'https://www.bitstamp.net/api/v2/ticker/btcusd/';
$TICKER_URL_EUR = 'https://www.bitstamp.net/api/v2/ticker/btceur/';


$jsonUsd = file_get_contents( $TICKER_URL_USD );
$jsonEur = file_get_contents( $TICKER_URL_EUR );

$tickerDataUsd = json_decode( $jsonUsd, true );
$tickerDataEur = json_decode( $jsonEur, true );

$newResponse = [
  'timestamp' => $tickerDataUsd['timestamp'],
  'bidUSD'    => $tickerDataUsd['bid'],
  'bidEUR'    => $tickerDataEur['bid']
];

header( 'Access-Control-Allow-Origin: *', true );
header( 'Content-Type: application/json; charset=utf-8', true );

echo json_encode( $newResponse );
