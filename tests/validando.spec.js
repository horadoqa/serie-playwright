import { test, expect } from '@playwright/test';

test('consultar usuários', async ({ request }) => {
  const response = await request.get('https://serverest.dev/usuarios');

  expect(response.ok()).toBeTruthy();

  expect(response.status()).toBe(200);

  // Verificando o tipo de conteúdo da resposta é um JSON

  const data = await response.json();
  
  expect(Array.isArray(data.usuarios)).toBeTruthy();
  
  // console.log(data);
});
