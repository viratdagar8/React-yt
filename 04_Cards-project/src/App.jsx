import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    datePosted: "5 days ago",
    designation: "Senior UI/UX Designer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgAHBAUGCAP/xABFEAABAwMBBQUEBQkFCQAAAAABAAIDBAURBgcSITFBE1FhcZEIIoGhFDJCsdEzNlJicnWCkrMVI7LB8RYXJUNUc6Lh8P/EABoBAQEBAAMBAAAAAAAAAAAAAAABAgMEBQb/xAAwEQEAAgIBAgMHBAEFAQAAAAAAAQIDEQQFITFBURIyQmFxkaETFSLRFFJTgeHwBv/aAAwDAQACEQMRAD8AuUFbBVQUEQRAQgKgiAoJhBEREVEAKIioCAFAEEQKFGjBVBQFBEDKA4QTCA4UEwUEwqiYUVMKhSiAqAgBQBBEUo5IphyRDICoCEBAUHKar2g2LTUrqaaZ1VXNHGmpxvOZ+0eTfv8ABBW1z2v36qe4UENHQw9PdMr/AIk8Pl8UXTQz661NUZMt7qx/23hn+HCaNPjHq2/xu3m3y5fxVcjvvKaGzodpOqqM5/tH6QB9moja8fLB+aaHaaf2w0sr2w6go/o5PD6TTAuZ8WniB5ZRNLNo6qnraWOqpJo54JBlkkbstcE2PqqhUAKoBQKgOECBFMFAyAhAwQVTtb2iS2qR1hsM+5WYBq6lvExAj6je5xHM9B4nhlYUn2x3iScknJJ6nvVURKgm8c8CgYPI6hAwl8UDdsccHIjrdnWtqjS1zYydxfap5AKmMu+pn/mDxHXvHjhB6Pa5r2NewhzXDLSORCMgVQqoCAYQRUIFFOFAUBQa3Ut4jsGn6+6ygFtLCXhp+077I+JwFJV5JqaqarqJKmqkdLUTOL5JHc3OJySVFIHINvpiw3DU12jt1ri3pXcXvdwbEzq5x7h81Rdlm2MWCmgb/a09VX1GPeLX9iwHuDW8ceZKibPeNjOnquneLVLU0FRj3Xl5lZnxa7p5EIbUjqC01en7tPbLlGGVEJ+ych7TycPAhVWu7TuQHfzz456IPS+ya5PuegrY+Rxc+na6mJPP3DgfLCkMy64rSAgVUAqiIEaor6BAQoCg5vaHp+p1RpOrtNDPHFPI5j29pndduuDsHHIcFJVRtTsi1nAfdoKeYd8VS0/fhQ21VRoDV1MMy6frcfqND/uJQ2ufYnpeosOn56u5UroK6ukzuSNw9sbeDQR045OPFElY4WkELMii/aJp447xZqtrcSS08kb3DqGuBaP/ACckNQqQOVUQ5B6C2BSl+jqpuciOueB8WtP+akMyskrSAgCoUqiIFasqcICgKAhAEE6oj4VldSUMbpa6qgpo2jLnzyhjR5kqK56s2j6PosiTUFG8jpC4yfNoIU2aaap20aQhbmKSuqD3RUxH+LCGlWbV9cUGtJ7a63UtVA2kEgcagNG9vbvINJ7kVwYJVUQ7jw4oL/8AZ4OdJXH95O/pxqQkrRWmQQBUBAFQoUU6gIQFBAg02qdUWrStv+mXefcDuEUTRvPlPc0f58gpMiidV7YdQXd74rS4WmkPAdid6Yjxf0/hx5qKr+rrKmulMtZUTVEn6c0he71KK+IJ6ICMqiZTYOUBBQegfZ2/NG4/vJ39ONPNmVpKoCAKgFAEChRThUEKAoMC/XiksFmq7rXu3YKZm87vceQaPEnA+Kkq8n6p1HX6ovE1yuUmZH8GRg+7Ezo1o7v9VkacnKo+tNBLUzRwU0b5ZpXBkcbBlznHkAOqC39L7DpqmFk+pq99MXgH6NSYL2+DnEEA+QKG3e0OybRdI0f8LdUOAxvTzvdn4Zx8ldJtXW3DS1psxtAsdBT0faiXtOzBG/jdwosKjBTanB4K7HoL2dfzRuP7yd/TjRmVplVAQAqgFAFQAopggKgiCm/aKvL46S12WN+BM51TKM9G+63PxLvRZlVHxbpkAecBB95TERk7uQAMB3LyQW9sCsFPLWXC/Pja8027T05zndeRl7vQtHxKQSuzectMmy4gDjy4oKW9oOfFXY4C8tzHM48cY4tH4rKwp0sgLeG63B6OJ4ZwiknawZ7PdAAB+tnKC/vZ1/NG4/vF39ONVJWmVUBAFQCgCABGjIgqCIPO3tCEnXNMD9m3RgfzyLMqrFBOaD0F7O1RHJpW404Le0hrd5wB44c0YJ9D6JCStZaQR5Iry7tg1DFqLWtQ+lfv0tGwUsThyduklxH8RPHwCyrieqCILw9nK6s7G8Wd5AeHsqoxn6wI3XemG+qEroWkBEAqgFAFRAo0IRBUECCifaMtjmXa03UB25LTupnHoCxxcPiQ8+izKqeQRB1WzzWVToy9Grjj7eknaI6qDOC9vQg9HDp5lBe9JtZ0ZU0gnN0NOQMuimhcHt4csAHPwyrtNOE2gbY219HLbNJtljZICyWulbuuLeojbzGe88fDqoqmRw8kBQRFbTTN8q9OXumutA7++gdndJ92Rp4Fp8CFZR6z05eqTUVkpLtQEmGoZvBp5sPItPiDkJCNiqgIAqAqAFGjBRBQEBBzO0TS7dW6YqLa0tbVNIlpnu+zIOQPgRkfFSVeUqulnoqiWmq4XwzxOLJI3jBY4dCoPigmEEQEDxQWHs22Z1eq3iuuXaUlnbnEmMPnP6men63wHgHJ6q09WaZvlTaq8ZkiOWSAYErD9Vw8D8jkdEGpxxVV1WhNEXLWFfuUrTDRRnE9W5vus8B+k7w9VNo9OabsVHpyzU9qtrXCngHAvOXOJ4lx8SURsiFUDCoUqiIFCNG4AZPAALMzpDgJsHCCYQcXrzZxaNYj6RKXUdxaMNq4mj3h0Dx9ofNQU3edjurbfKfodNDcoc8JKeVrT8WuIPplF203+7rWGcf7PV38o/FDbYW/ZLrOtka11qbSsPOSonY0D4Al3yQWTpDYrbbbIyq1DUf2lM3iKdrd2EHx6u+Q8EFqxxsiY2ONjWMaMNa0YAHcFWXL7QNE0OsrYIZsQVsOTTVTW5LD3Hvae70Rdql0zsWvlTeCzUTWUdvhd7z4pmvdOM8mY4geLseSi7X3abZRWmghoLbTR09LC3DI2DAHj4k9T1RH2nqIKcf30rI+vvOwuLJmx4/ftEN1x2v7sbYxvNt/6yL1XX/ceL/uQ5f8TP8A6JZME8NTHvwSskb3sdldrHlpkjdJ3DhtS1J1aDELlZBEIFWi1VPHV00lPMMxyNLXYXFlxxkpNLeEtUvNLRaPGHLMrbhpmoFLUg1NEfybjzx4Hv8ABfPzyM/Tr+xk/lTyer+ji5lfbp2t5umt1ypLizeppATj3mHg4eYXscfmYeRG8c/283LgyYp1aGbwXZcKYV2AQmxMK7E3U2BupsHCmwQE2DhQfGriklgcyKUxPPJ4GSFx5a2tWa1nU+rdJittzG2lOmqXjJU1c7jzc8kD5lePfomGZm2S8y78dRyR/GtYhiXLT1LFb5KqmqHu3GFw3iCHei63J6PgphnLjtPaNuXDz8lskUvWO5dEMPaVkg+qQwfHitdApOr2+idUmP4x9XUlfTPJKiEBVaOCoPlV0sFbTugqWB8bhxHd4hcOfDTNSaXjcN48lsdvarPdxd0s1VaJe2ic90A+rM3gW+B/FfI8zp+biW9uk9vX0e5x+Xjz19m3j6Sy7fqargAbUgVDe8+671XLx+t5cfbLHtR+WM3Tcdu9OzoKTUFBUgAy9i79GXh8+S9rD1bi5fi1Pzebk4Wenlv6NkyRrxlhDh3g5XoRaJjs6sxqdSdaEQRBEAKDGqK+lpRmeeNngXcfRcGXk4sUbyWiHJTFe/uxtpq3VMLMtpIXSHo93Bv4rx+R13FXtijbvYum3nvknTTiS5X6fst4uYOeODGea8yL8zqV/Z32/EO7NePxK78/y2l9DLTp5lDG4uMh3cnr1cf/ALvXqc+K8TgxhrPj2/t0eLM5+T+pPkz9N0TqG1sEgxLKd947s8h6YXf6Zxv8fBFZ8Z7y6/Mzfq5ZmPCGycvSdQqBAq0dEM0qBiA5uHAOB6FYtETGjwc9c9MRyl0tARC884z9U+XcvC5fRaZN2w9p9PJ6fH6janbJ3hzdXS1NE4Mq4XRk8ieR8ivm+RxM2CdXjT18WfHljdJLDPJC7MMr4yOrHFv3Liply4/ctMfRq2Olu1o2z4b5cYgMVTnD9cAru4+rcunx7+rrW4WC3wshupbiOfYu82fgV2I69yo9Pt/2456bhn1MdT1/6NP/ACH8Vf3/AJPpH/v+Wf2zD6z+Hzk1HcXD8oxv7LFieucufOPs3HTsEerCnuVbP+Uq5iD0D90H0XTyc7lZPevLnrxcNfCrGibJPIGRMdJIfstGSuCmPJlvqsTMuW1q0jc9ob226ZnlLZK89kzn2bTlx8z0XvcPodrfyzzqPR5ufqNY7Yu/zdRS00NJCIoI2xsHQBfSYsVMVfZpGoeRfJa87tLBqrWyruUNVUv344We5DjhvZzk/L0XXy8KubPGS87iPCPm5aciceOaV8/NsCV3odcpVQFQiNGRBCgbKBg5TQD2MkaWPaHNPMEZBWLVi0alYmYncNVVabt85JYx0Dj1jOB6cl5mbo/FyeEa+juY+fmp2md/VrJ9JTNyaerY7wkaR8x+C83L0Cfgv93br1SPiqxXaZuTTgGB3k/8QurPQuVHp93NHUsPnsBpq5npCPOT/wBKfsXK+X3X9ywfNkQ6Uqn/AJaqiZ+yC78Fz4//AJ/L8doj8/04rdUp8NZbGm0tRRkOnklmPcTgfJejh6Jxqd77s6uTqOW3u9m4p6WClZuU8TI29zW4Xq48NMUapGnSvkted2nb65XKwUlXSASqFKAFUBAqNCEBCIYKAoCFNAgqBlAUEwgCqASigSroAogKhVREAQBUf//Z",
    company: "Amazon",
    datePosted: "3 days ago",
    designation: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "1 week ago",
    designation: "React Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    datePosted: "2 weeks ago",
    designation: "iOS Software Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "https://cdn.simpleicons.org/microsoft",
    company: "Microsoft",
    datePosted: "4 days ago",
    designation: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    datePosted: "3 weeks ago",
    designation: "Product Designer",
    tag: "Part Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    datePosted: "6 days ago",
    designation: "AI/ML Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Salesforce",
    datePosted: "1 week ago",
    designation: "Cloud Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Adobe",
    datePosted: "2 days ago",
    designation: "UI/UX Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "data:image/png;base64,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",
    company: "Oracle",
    datePosted: "2 weeks ago",
    designation: "Backend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Hyderabad, India"
  }
];
console.log(jobs) ;
  return (
    <div className='parent'>
     {jobs.map(function(elem , idx){
      return <div key={idx}>
     <Card company={elem.company} designation={elem.designation} brandLogo={elem.brandLogo}
      tag={elem.tag} tag2={elem.tag2}
      datePosted={elem.datePosted} pay={elem.pay} location={elem.location}/>
      </div>  
     })}

    </div>
)
}

export default App 