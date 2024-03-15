import { Button } from "@/components/ui/CustomButtonPrimary/CustomButtonPrimary";
import CloseIcon from "@/json/icons/CloseIcon";
 
 
interface propType{
    btnName:string,
    onClick?:()=>void
}
 const CheapButtons = ({btnName,onClick}:propType) => {
    return (
        <Button
          variant="outline"
          className=" border-gray-200 h-auto py-1 px-3 font-satoshi_regula bg-gray-100"
          onClick={onClick}
        >
          {btnName}
          <span className=" inline-flex items-center justify-center ml-2 ">
            <CloseIcon />
          </span>
        </Button>
      );
 }
 
 export default CheapButtons