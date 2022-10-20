import TestimonialCard from "./TestimonilaCard";


export default function Testimonial(props) {
    
    const testimonialDetails = [
        {
            id: 1,
            testimonial: 'Conducive training facility! Super amiable really push, motivate and help us go beyond our perceived limitations. I highly recommend fly fitness factory', 
            name: 'Muhmeen', 
            location: 'Ibadan'
        },
        {
            id: 2,
            testimonial: 'I am barely two weeks into my subcsription and i can readily vouch for how awesome this place is.', 
            name: 'Foluke', 
            location: 'Ibadan'
        },
        {
            id: 3,
            testimonial: 'After all these years. I have finally found a place i am extremely comfortable working out. I haven’t felt  fitter and stronger than i feel right now.', 
            name: 'Mary', 
            location: 'Lagos'
        },
        {
            id: 4,
            testimonial: 'After all these years. I have finally found a place i am extremely comfortable working out. I haven’t felt fitter and stronger than i feel right now.', 
            name: 'idowu', 
            location: 'Ibadan'
        },
    ]

    return (
        <div className='flex lg:flex-row sm:flex-col sm:mx-auto items-center justify-center lg:gap-2 sm:gap-32 lg:p-32 sm:p-10'>
            {testimonialDetails.map(testDetails => (
                <div className='h-64' key={testDetails.id}>
                    <TestimonialCard testimony={testDetails.testimonial} name={testDetails.name} location={testDetails.location}/>
                </div>
            ))}
        </div>
    )
}
