import http from 'k6/http'
import { sleep, check } from 'k6'
import { BASE_URL } from '../config.js';

export const options = {
  stages: [
    { duration: '2m', target: 600 }, // rump-up de 1 até 600 virtual users em 2 minutos
    { duration: '40s', target: 0 }, // ramp-down de 600 VUs até 0 em 40 segundos
  ],
}

export default function () {

    const payload = JSON.stringify({
        "email": "usuario@teste.com",
        "password": "user123"
    })

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    let response = http.post(`${BASE_URL}/api/users`, payload, params)
    sleep(5)

    check(response, {
        'Status code deve ser 200': (r) => r.status === 200
    })
}