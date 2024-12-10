import React from 'react'

function ApeCard({name,apePrice = "0.00"}) {
    
  return (
    <>
        <div className="w-80 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold text-2xl">{name}</h1>
            <h1 className="font-bold text-2xl">Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>{apePrice}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApeCard
