// @refresh reload
import { Suspense } from "solid-js";
import { useAssets } from "solid-js/web";
import {
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
} from "solid-start";
import Bar from "./components/Nav/Bar";
import { css, renderSheets, StyleRegistry, type StyleData } from "solid-styled";

function GlobalStyles() {
	css`
    @global {
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    body {
    //   background: #272727;
    }
    }
  `;
	return null;
}

export default function Root() {
	const sheets: StyleData[] = [];
	useAssets(() => renderSheets(sheets));

	return (
		<StyleRegistry styles={sheets}>
			<Html lang="en">
				<Head>
					<Title>SolidStart - Bare</Title>
					<Meta charset="utf-8" />
					<Meta name="viewport" content="width=device-width, initial-scale=1" />
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
						crossorigin="anonymous"
					/>
				</Head>
				<Body>
					<GlobalStyles />
					<Suspense>
						<ErrorBoundary>
							<Bar/>
							<Routes>
								<FileRoutes />
							</Routes>
						</ErrorBoundary>
					</Suspense>
					<Scripts />
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
						crossorigin="anonymous"
					></script>
				</Body>
			</Html>
		</StyleRegistry>
	);
}
