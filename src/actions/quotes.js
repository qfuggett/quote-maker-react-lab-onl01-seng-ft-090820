// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
    return { 
        type: 'ADD_QUOTE',
        quote: quote
    }
}

export const removeQuote = (quoteID) => {
    return { 
        type: 'REMOVE_QUOTE',
        quoteID: quoteID
    }
}

export const upvoteQuote = (quoteID) => {
    return { 
        type: 'UPVOTE_QUOTE',
        quoteID: quoteID
    }
}

export const downvoteQuote = (quoteID) => {
    return { 
        type: 'DOWNVOTE_QUOTE',
        quoteID: quoteID
    }
}