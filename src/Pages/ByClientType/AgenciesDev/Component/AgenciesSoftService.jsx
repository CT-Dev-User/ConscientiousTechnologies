import React from 'react'
import agenciesSoftDevService from '../../../../assets/ByClientType/AgenciesSoftDev/agenciesSoftDevService.png'
const AgenciesSoftService = () => {
    const webSolutionArr = [{ title: "White Label Services", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." },

     { title: "Team Extension", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." },
      { title: "Product Engineering", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }, 
      { title: "Digital Transformations", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." },

      { title: "Blockchain", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }, 
      { title: "DevOps", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }
    ]

    return (
        <div className='w-[100vw] h-[auto] box-border pt-[30px] md:pt-[50px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Agencies Software Development Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 justify-between'>
                <div className='w-[30%] h-[615px]'>
                    <img src={agenciesSoftDevService} alt="Agencies Software Development Services" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[67%] flex gap-2 flex-wrap'>
                    {webSolutionArr.map((items, i) => {
                        return (
                            <div className='w-[45%] h-[200px] p-3 border border-[#ccc]'>
                                <h4>{items.title}</h4>
                                <p className='text-[13.5px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default AgenciesSoftService
