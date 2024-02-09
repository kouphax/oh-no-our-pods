import styled from "styled-components";


export const Main = styled.div.attrs({className: "min-w-96"})``

export const Header = styled.h1.attrs({className: "mb-10 text-4xl font-extrabold text-gray-700"})``

export const Button = styled.button.attrs({
    className: `
    text-center 
    text-white 
    font-bold 
    py-2
    px-4 
    border-b-4 
    rounded 
    flex-1`
})``

export const NeutralButton = styled(Button).attrs({
    className: `
    bg-gray-500
    hover:bg-gray-600
    border-gray-700
    hover:border-gray-700`
})``

export const PositiveButton = styled(Button).attrs({
    className: `
    bg-green-500
    hover:bg-green-600
    border-green-700
    hover:border-green-700`
})``

export const NegativeButton = styled(Button).attrs({
    className: `
    bg-red-500
    hover:bg-red-600
    border-red-700
    hover:border-red-700`
})``

export const Snippet = styled.code.attrs({
    className: `
    text-sm 
    p-1
    border-b-4 
    font-bold 
    bg-gray-200 
    border-gray-300`
})``

export const Question = styled.h2.attrs({
    className: `
    text-xl 
    my-8 
    text-gray-700 
    font-semibold`
})``

export const Outcome = styled.h2.attrs({
    className: `
    text-2xl 
    my-8 
    text-gray-700 
    font-bold
    border-b-4
    bg-gray-200 
    p-2
    border-gray-300
    scale-110`
})``

export const Interim = styled.h2.attrs({
    className: `
    text-2xl 
    my-8 
    text-gray-700 
    font-bold`
})``
