
import { motion } from "framer-motion"
import Products from "../../components/ui/Products";

const EngineeredOak = () => {


    return (
        <div>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-[70vh] bg-gradient-to-br from-[#8A6A5A] via-[#735644] to-[#5d453a] overflow-hidden"
                style={{
                    backgroundImage: "url(./images/header3.jpg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                }}
            >

                {/* Background overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                                Engineered Oak
                            </h1>
                            <div className="w-32 h-1 bg-white/60 mx-auto mb-8"></div>
                        </motion.div>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
                        >
                            Quality Bathroom Solutions for Modern Living
                        </motion.p>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Discover our premium collection of bathroom fixtures, tapware, and
                            accessories designed to elevate your space with Australian quality
                            and style.
                        </motion.p>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex gap-4 justify-center flex-wrap"
                        >
                            <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                    Shop Collection
                                </span>

                                <span
                                    className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                               transition-transform duration-300 group-hover:scale-x-100"
                                ></span>
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                Learn More
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                    </div>
                </motion.div>
            </motion.section>

            <div className="mb-28">
            <Products />
            </div>
        </div>
    )
}

export default EngineeredOak