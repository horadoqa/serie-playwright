#!/usr/bin/env bash

START_PORT=5500
END_PORT=5599

echo "🔍 Processos utilizando as portas ${START_PORT}-${END_PORT}:"
echo

sudo lsof -nP -iTCP:${START_PORT}-${END_PORT} -sTCP:LISTEN

echo
read -r -p "⚠️  Finalizar esses processos? [y/N] " CONFIRM

if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    echo "❌ Operação cancelada."
    exit 0
fi

PIDS=$(sudo lsof -t -iTCP:${START_PORT}-${END_PORT} -sTCP:LISTEN)

if [[ -z "$PIDS" ]]; then
    echo "✅ Nenhum processo encontrado."
    exit 0
fi

echo
echo "🛑 Finalizando processos:"
echo "$PIDS"

echo "$PIDS" | xargs -r sudo kill

sleep 1

REMAINING=$(sudo lsof -t -iTCP:${START_PORT}-${END_PORT} -sTCP:LISTEN)

if [[ -n "$REMAINING" ]]; then
    echo
    echo "⚠️ Alguns processos ainda estão ativos."
    echo "Forçando encerramento..."

    echo "$REMAINING" | xargs -r sudo kill -9
fi

echo
echo "🔍 Verificando portas novamente:"

sudo lsof -nP -iTCP:${START_PORT}-${END_PORT} -sTCP:LISTEN

if [[ $? -eq 0 ]]; then
    echo "⚠️ Ainda existem processos utilizando as portas."
else
    echo "✅ Portas ${START_PORT}-${END_PORT} liberadas."
fi
