// HandlePost esta función se encarga de recibir los datos
// enviarlos al servidor verificador y recibir la respuesta
// para luego devolverla al cliente
// -------------------------------------------------------
// variables de entrada request y env conteniendo el request
// y las variables de entorno respectivamente.
async function handlePost(request, env) {
    const body = await request.formData();
    // Obtenemos el token de Turnstile ademas de la ip del cliente.
    const token = body.get('cf-turnstile-response');
    const ip = request.headers.get('CF-Connecting-IP');

    // Validamos el token llamando el API de "/siteverify".
    // Agregamos la llave secreta guardada en una variable de entorno
    // y los demas datos, para despues verificar el token.
    let formData = new FormData();
    formData.append('secret', env.TS_SECRET_KEY);
    formData.append('response', token);
    formData.append('remoteip', ip);
    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        body: formData,
        method: 'POST',
    });

    // Convertimos la respuesta del servidor a un objeto JSON.
    // y lo devolvemos al cliente.
    const outcome = await result.json();
    return new Response(JSON.stringify(outcome));
}

// Función principal que se encarga de recibir el request
export default {
    async fetch(request, env) {
        if (request.method === 'POST') {
            return await handlePost(request, env);
        } else {
            return new Response("Sorry, only POST requests are allowed here.", { status: 405 });
        }
    },
};
