import {render} from '@testing-library/react';
import {combineReducers, createStore} from "redux";
import reducer from "./redux/caclReducer";
import {Provider} from "react-redux";
import App from "./App";
import userEvent from "@testing-library/user-event";
import InterestCalculator from "./components/InterestCalculator";
import calcReducer from "./redux/caclReducer";

const renderWithRedux = (
    component,
    {initialState, store = createStore(combineReducers({calcReducer}), initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

describe("Redux testing", () => {
        it("checks initial state is equal to 0", () => {
            const {getByRole} = renderWithRedux(<InterestCalculator/>)
            expect(getByRole("heading")).toHaveTextContent("0")
        })

        it("check the correctness of the result", () => {
            const {getByRole, getByPlaceholderText, getByText} = renderWithRedux(<InterestCalculator/>)
            userEvent.type(getByPlaceholderText("principal"), "5000")
            userEvent.type(getByPlaceholderText("rate"), "2.5")
            userEvent.type(getByPlaceholderText("years"), "5")
            userEvent.click(getByText("Calculate"));
            expect(getByRole("heading")).toHaveTextContent("5625")
        })
    }
)
