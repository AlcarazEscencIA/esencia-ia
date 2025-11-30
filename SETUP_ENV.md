# Configuración de Variables de Entorno

Para que el formulario de contacto funcione, necesitas configurar la API de Resend:

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key desde [https://resend.com/api-keys](https://resend.com/api-keys)
3. Crea un archivo `.env.local` en la raíz del proyecto con:

```
RESEND_API_KEY=tu_api_key_aqui
```

4. Reinicia el servidor de desarrollo (`npm run dev`)

## Notas Importantes

- El archivo `.env.local` está en `.gitignore` y no se subirá a Git
- Necesitas verificar tu dominio en Resend para enviar emails desde tu dominio
- Por defecto, Resend permite enviar desde `onboarding@resend.dev` para pruebas
- Actualiza el email de destino en `src/app/actions/contact.ts` (línea 35)
