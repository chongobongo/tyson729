

export const JobDescription = ({
    description,
}: {
    description : {
        title: string
    }
}) => {
        return (
        <div id="jobDescrition" className="w-60 h-60 bg-blue-300">
            Job Description : {description.title}
        </div>
    )
}