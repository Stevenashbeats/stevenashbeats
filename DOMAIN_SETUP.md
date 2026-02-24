# Konfiguracja Własnej Domeny dla Cloudflare Pages

## 🌐 Aktualny URL
**Produkcja**: https://main.stevenashbeats.pages.dev

## 📋 Kroki Konfiguracji Własnej Domeny

### Opcja 1: Domena zarządzana przez Cloudflare (Zalecane)

Jeśli Twoja domena jest już w Cloudflare:

1. **Przejdź do Cloudflare Pages Dashboard**
   - Zaloguj się na https://dash.cloudflare.com/
   - Wybierz konto: `Nashpillow@gmail.com's Account`
   - Przejdź do **Workers & Pages** → **stevenashbeats**

2. **Dodaj Custom Domain**
   - Kliknij zakładkę **Custom domains**
   - Kliknij **Set up a custom domain**
   - Wprowadź swoją domenę, np:
     - `stevenashbeats.com` (apex domain)
     - `www.stevenashbeats.com` (subdomain)
     - `beats.stevenash.com` (subdomain)

3. **Cloudflare automatycznie skonfiguruje DNS**
   - Dla domen w Cloudflare, DNS zostanie skonfigurowany automatycznie
   - Certyfikat SSL zostanie wygenerowany automatycznie (może zająć kilka minut)

### Opcja 2: Domena u innego dostawcy (np. GoDaddy, Namecheap)

1. **Dodaj domenę w Cloudflare Pages** (kroki 1-2 z Opcji 1)

2. **Cloudflare poda Ci rekordy DNS do skonfigurowania:**
   
   Dla apex domain (np. `stevenashbeats.com`):
   ```
   Type: CNAME
   Name: @
   Target: stevenashbeats.pages.dev
   ```

   Dla subdomain (np. `www.stevenashbeats.com`):
   ```
   Type: CNAME
   Name: www
   Target: stevenashbeats.pages.dev
   ```

3. **Skonfiguruj DNS u swojego dostawcy**
   - Zaloguj się do panelu swojego dostawcy domeny
   - Znajdź sekcję DNS/Nameservers
   - Dodaj rekordy CNAME podane przez Cloudflare

4. **Poczekaj na propagację DNS** (może zająć 24-48h, zwykle kilka minut)

### Opcja 3: Przeniesienie domeny do Cloudflare (Najbardziej zalecane)

1. **Przenieś nameservery do Cloudflare**
   - W Cloudflare Dashboard, kliknij **Add a Site**
   - Wprowadź swoją domenę
   - Wybierz plan (Free jest wystarczający)
   - Cloudflare poda Ci nameservery do ustawienia

2. **Zmień nameservery u swojego dostawcy**
   - Zaloguj się do panelu dostawcy domeny
   - Znajdź ustawienia nameservers
   - Zamień obecne nameservery na te podane przez Cloudflare:
     ```
     ns1.cloudflare.com
     ns2.cloudflare.com
     ```

3. **Po aktywacji domeny w Cloudflare, dodaj Custom Domain** (Opcja 1)

## ✅ Weryfikacja

Po skonfigurowaniu domeny:

1. Sprawdź status w Cloudflare Pages Dashboard
2. Poczekaj na status: **Active** (zielony)
3. Certyfikat SSL: **Active** (może zająć do 24h)
4. Otwórz domenę w przeglądarce i sprawdź czy strona działa

## 🔒 SSL/HTTPS

- Cloudflare automatycznie generuje darmowy certyfikat SSL
- HTTPS jest wymuszane automatycznie
- Certyfikat odnawia się automatycznie

## 🚀 Przyszłe Deploymenty

Po skonfigurowaniu domeny, każdy deployment będzie automatycznie dostępny pod:
- Twoją custom domeną (np. `stevenashbeats.com`)
- URL Cloudflare Pages (`main.stevenashbeats.pages.dev`)

Aby wdrożyć zmiany:
```bash
npm run deploy
```

## 📞 Wsparcie

Jeśli masz problemy:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [DNS Checker](https://dnschecker.org/) - sprawdź propagację DNS
