# Medium Clone

In This project i create a medium clone web, to learn how use navigate and use params works

## Preview

#### Home Preview
![Preview](./src/assets/image.png)

#### Article Detail
![Preview](./src/assets/article.png)


## How to Run This Project

### I. Manually
1. Clone the repository:
   ```bash
   git clone https://github.com/VsalCode/fgo24-react-medium.git
   ```

2. Navigate to the project folder:
   ```bash
   cd fgo24-react-medium
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal).

### II. With Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/VsalCode/fgo24-react-medium.git
   ```

2. Navigate to the project folder:
   ```bash
   cd fgo24-react-medium
   ```

3. Build the Docker image:
   ```bash
   docker build . -t medium:latest
   ```

4. Run the Docker container:
   ```bash
   docker run -p 8080:80 -d medium:latest
   ```

5. Visit the app at `http://localhost:8080`.

## Dependencies
- Vite
- Tailwind CSS
- React Router DOM

## How to Contribute
Pull requests are welcome! For major changes, please open an issue first to discuss your proposed changes. Ensure tests are updated as needed.

## License
[MIT](https://opensource.org/license/mit)
