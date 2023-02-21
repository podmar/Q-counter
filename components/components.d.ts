interface FormProps {
    setEntries: (noOfEntries: number) => void
}

interface EntryProps extends FormProps {
    entries: number
}

interface ChooseUserProps {
    setUser: (user: any) => void
}