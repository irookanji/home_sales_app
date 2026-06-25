import { render } from "@testing-library/react";
import App from "./main-page";

beforeEach(() => {
	global.fetch = vi.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve([]),
		}),
	);
});

it("renders without crashing", () => {
	render(<App />);
});
