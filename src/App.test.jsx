import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App',()=>{
    it('should have healine h1 Wordle',()=>{
        render(<App />);
        expect(screen.getByText(/Wordle/i)).toBeInTheDocument();
    })
})