import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('should render Hello World', () => { 
    //Arrenge
    render(<Greeting/>);

    // Act
    
    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
})