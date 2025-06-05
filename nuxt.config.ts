import "./lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["@picocss/pico"],
	compatibilityDate: "2025-05-15",
	eslint: {
		config: {
			stylistic: {
				indent: "tab",
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
			},
		},
	},
});
