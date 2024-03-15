import React from 'react'

import { Progress } from "@/components/ui/progress"


export default function ServiceDetailsProgress() {

    const [progress, setProgress] = React.useState(13)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(100), 500)
      return () => clearTimeout(timer)
    }, [])
  return (
    <div className='progressValueBar relative w-full'>
      <Progress value={progress} className="w-[100%] h-[6px] !bg-[#F8BF23] rounded-[100px] progessBar_main" />
    </div>
  )
}
