# Thư mục Secrets - Thông tin nhạy cảm

⚠️ **CẢNH BÁO BẢO MẬT**: Thư mục này chứa các file nhạy cảm và **KHÔNG** được commit vào Git.

## Các file trong thư mục này

### `client_secrets.json`
- **Mô tả**: File chứa thông tin xác thực Google OAuth
- **Nội dung**: Client ID, Client Secret, Redirect URIs
- **Sử dụng**: Xác thực Google OAuth cho eKYC

### `serviceAccountKey.json`
- **Mô tả**: File chứa thông tin Service Account của Firebase
- **Nội dung**: Thông tin xác thực Firebase Admin SDK
- **Sử dụng**: Kết nối với Firebase Storage và các dịch vụ Firebase khác

## Cách thiết lập

1. **Tạo file từ template** (nếu chưa có):
   - Copy file mẫu từ môi trường development
   - Hoặc tạo mới từ Google Cloud Console / Firebase Console

2. **Đảm bảo file được bảo vệ**:
   - File này đã được thêm vào `.gitignore`
   - Không chia sẻ file này qua email, chat, hoặc bất kỳ kênh nào không an toàn

3. **Quyền truy cập**:
   - Chỉ developer và DevOps có quyền truy cập
   - Sử dụng biến môi trường hoặc secret manager trong production

## Lưu ý

- ⚠️ **KHÔNG** commit các file này vào Git
- ⚠️ **KHÔNG** chia sẻ thông tin trong các file này
- ✅ Sử dụng biến môi trường trong production
- ✅ Rotate keys định kỳ để đảm bảo bảo mật

