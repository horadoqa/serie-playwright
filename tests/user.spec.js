import { test, expect } from '@playwright/test';

test.describe('CRUD - Usuário Serverest', () => {

  test('Create → Login → Read → Update → Delete', async ({ request }) => {

    // ==========================================
    // CREATE - Cadastrando usuário
    // ==========================================

    const email = `horadoqa${Date.now()}@exemple.com`;

    const cadastroResponse = await request.post(
      'https://serverest.dev/usuarios',
      {
        data: {
          nome: 'Hora do QA',
          email: email,
          password: '1q2w3e4r',
          administrador: 'true'
        }
      }
    );

    expect(cadastroResponse.status()).toBe(201);

    const cadastroBody = await cadastroResponse.json();

    expect(cadastroBody).toEqual(
      expect.objectContaining({
        message: 'Cadastro realizado com sucesso',
        _id: expect.any(String)
      })
    );

    const userId = cadastroBody._id;

    console.log('CREATE: Usuário criado com sucesso');


    // ==========================================
    // LOGIN - Realizando login
    // ==========================================

    const loginResponse = await request.post(
      'https://serverest.dev/login',
      {
        data: {
          email: email,
          password: '1q2w3e4r'
        }
      }
    );

    expect(loginResponse.status()).toBe(200);

    const loginBody = await loginResponse.json();

    expect(loginBody).toEqual(
      expect.objectContaining({
        message: 'Login realizado com sucesso',
        authorization: expect.stringContaining('Bearer ')
      })
    );

    const token = loginBody.authorization;

    console.log('LOGIN: Login realizado com sucesso');


    // ==========================================
    // READ - Consultando usuário
    // ==========================================

    const readResponse = await request.get(
      `https://serverest.dev/usuarios/${userId}`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    expect(readResponse.status()).toBe(200);

    const readBody = await readResponse.json();

    expect(readBody).toEqual(
      expect.objectContaining({
        _id: userId,
        nome: 'Hora do QA',
        email: email,
        administrador: 'true'
      })
    );

    console.log('READ: Usuário consultado com sucesso');


    // ==========================================
    // UPDATE - Atualizando usuário
    // ==========================================

    const updateResponse = await request.put(
      `https://serverest.dev/usuarios/${userId}`,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          nome: 'Hora do QA - Atualizado',
          email: email,
          password: '1q2w3e4r',
          administrador: 'true'
        }
      }
    );

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    expect(updateBody.message).toBe(
      'Registro alterado com sucesso'
    );

    console.log('UPDATE: Usuário atualizado com sucesso');


    // ==========================================
    // DELETE - Excluindo usuário
    // ==========================================

    const deleteResponse = await request.delete(
      `https://serverest.dev/usuarios/${userId}`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    expect(deleteResponse.status()).toBe(200);

    const deleteBody = await deleteResponse.json();

    expect(deleteBody.message).toBe(
      'Registro excluído com sucesso'
    );

    console.log('DELETE: Usuário excluído com sucesso');

  });

});
