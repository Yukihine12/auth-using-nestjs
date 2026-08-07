# ==============================================================================
# Dockerfile - PostgreSQL Database
# ==============================================================================

# 1. Base Image
FROM postgres:16-alpine

# 2. Timezone
ENV TZ=Asia/Jakarta

# 4. Copy Script Inisialisasi (Opsional)
# COPY ./init.sql /docker-entrypoint-initdb.d/

# 5. Copy Custom Config (Opsional)
# COPY ./postgresql.conf /etc/postgresql/postgresql.conf
# CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]

# 6. Expose Port Default
EXPOSE 5432
