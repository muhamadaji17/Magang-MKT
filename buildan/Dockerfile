FROM nginx:alpine

# Hapus konten lama di /usr/share/nginx/html (jika ada)
RUN rm -rf /usr/share/nginx/html/*

# Salin file hasil build (dist) ke direktori default nginx
COPY dist /usr/share/nginx/html

# Salin konfigurasi nginx ke dalam container (opsional)
COPY default.conf /etc/nginx/conf.d/default.conf

# Ekspos port nginx
EXPOSE 4011

# Jalankan nginx
CMD ["nginx", "-g", "daemon off;"]