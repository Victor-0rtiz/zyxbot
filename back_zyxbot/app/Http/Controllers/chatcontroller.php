<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;


class chatcontroller extends Controller
{
    function query($data)
{
    $client = new Client();

    try {
        $response = $client->post('https://www.stack-inference.com/run_deployed_flow?flow_id=650a4696b6d0f56b0f7dfb2e&org=129f4e6f-1020-44b9-acec-3309e2993394', [
            'headers' => [
                'Authorization' => 'Bearer 9d94fb4c-6138-4a9f-bda1-8e81e9d0c44c',
                'Content-Type' => 'application/json',
            ],
            'json' => $data,
        ]);

        return json_decode($response->getBody(), true);
    } catch (RequestException $e) {
        // Manejar el error de la solicitud HTTP aquí
        // Por ejemplo, puedes lanzar una excepción o devolver un mensaje de error
        return ['error' => $e->getMessage()];
    }
}

}
