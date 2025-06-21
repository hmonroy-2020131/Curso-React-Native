const fs = require("fs");
const path = require("path");
const readline = require("readline");

const raiz = process.cwd();
const carpetasAnteriores = ["app", "components", "hooks", "constants", "scripts"];
const carpetaEjemplo = "app-example";
const nuevaApp = "app";
const rutaEjemplo = path.join(raiz, carpetaEjemplo);

const contenidoIndex = `import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edita app/index.tsx para modificar esta pantalla.</Text>
    </View>
  );
}
`;

const contenidoLayout = `import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack />;
}
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moverCarpetas = async (accionUsuario) => {
  try {
    if (accionUsuario === "y") {
      await fs.promises.mkdir(rutaEjemplo, { recursive: true });
      console.log(`📁 Carpeta /${carpetaEjemplo} creada.`);
    }

    for (const carpeta of carpetasAnteriores) {
      const rutaVieja = path.join(raiz, carpeta);
      if (fs.existsSync(rutaVieja)) {
        if (accionUsuario === "y") {
          const rutaNueva = path.join(rutaEjemplo, carpeta);
          await fs.promises.rename(rutaVieja, rutaNueva);
          console.log(`➡️ /${carpeta} movida a /${carpetaEjemplo}/${carpeta}.`);
        } else {
          await fs.promises.rm(rutaVieja, { recursive: true, force: true });
          console.log(`❌ /${carpeta} eliminada.`);
        }
      } else {
        console.log(`➡️ /${carpeta} no existe, se omite.`);
      }
    }

    const rutaNuevaApp = path.join(raiz, nuevaApp);
    await fs.promises.mkdir(rutaNuevaApp, { recursive: true });
    console.log("\n📁 Nueva carpeta /app creada.");

    const rutaIndex = path.join(rutaNuevaApp, "index.tsx");
    await fs.promises.writeFile(rutaIndex, contenidoIndex);
    console.log("📄 app/index.tsx creado.");

    const rutaLayout = path.join(rutaNuevaApp, "_layout.tsx");
    await fs.promises.writeFile(rutaLayout, contenidoLayout);
    console.log("📄 app/_layout.tsx creado.");

    console.log("\n✅ Reinicio del proyecto completado. Próximos pasos:");
    console.log(
      `1. Ejecuta \`npx expo start\` para iniciar el servidor de desarrollo.\n2. Edita app/index.tsx para personalizar la pantalla principal.${
        accionUsuario === "y"
          ? `\n3. Elimina la carpeta /${carpetaEjemplo} cuando ya no la necesites.`
          : ""
      }`
    );
  } catch (error) {
    console.error(`❌ Error durante la ejecución: ${error.message}`);
  }
};

rl.question(
  "¿Deseas mover los archivos existentes a /app-example en lugar de eliminarlos? (Y/n): ",
  (respuesta) => {
    const entrada = respuesta.trim().toLowerCase() || "y";
    if (entrada === "y" || entrada === "n") {
      moverCarpetas(entrada).finally(() => rl.close());
    } else {
      console.log("❌ Entrada no válida. Escribe 'Y' o 'N'.");
      rl.close();
    }
  }
);
