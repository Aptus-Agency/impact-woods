export function PartnersSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 md:gap-12 px-4">
                <div className="text-center md:text-left md:w-[20%]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Partners</h3>
                    <p className="text-muted-foreground text-sm">The brands we work with to deliver the best results to your home.</p>
                </div>

                <div className="w-full md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
                    <div className="flex justify-center">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="Partner logo" className="w-32 h-16 md:w-40 md:h-24 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="Partner logo" className="w-32 h-16 md:w-40 md:h-24 object-contain" />
                    </div>
                    <div className="flex justify-center">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="Partner logo" className="w-32 h-16 md:w-40 md:h-24 object-contain" />
                    </div>
                </div>
            </div>
        </section>
    )
}