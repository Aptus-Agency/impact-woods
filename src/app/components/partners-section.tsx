export function PartnersSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto max-w-6xl flex flex-row gap-12">
                <div className="mb-10 w-[20%]">
                    <h3 className="text-3xl font-bold mb-4">Our Partners</h3>
                    <p className="text-muted-foreground text-sm">The brands we work with to deliver the best results to your home.</p>
                </div>

                <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <div className="">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="" className="w-40 h-24" />
                    </div>
                    <div className="">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="" className="w-40 h-24" />
                    </div>
                    <div className="">
                        <img src="https://res.cloudinary.com/zurri-cloud/image/upload/v1758135082/impact-woods/zhehkh78ohki1frbzera.png" alt="" className="w-40 h-24" />
                    </div>
                </div>
            </div>
        </section>
    )
}