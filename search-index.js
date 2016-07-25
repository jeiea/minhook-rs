var searchIndex = {};
searchIndex["minhook"] = {"doc":"# The minhook-rs library\nThis library provides function hooking support to Rust by providing a\nwrapper around the [MinHook][minhook] library.","items":[[3,"HookQueue","minhook","A queue of hook changes to be applied at once.",null,null],[3,"Hook","","A hook that is destroyed when it goes out of scope.",null,null],[3,"StaticHook","","A hook with a static lifetime.",null,null],[3,"StaticHookWithDefault","","A hook with a static lifetime and a default detour closure.",null,null],[4,"Error","","The error type for all hooking operations.",null,null],[13,"AlreadyInitialized","","MinHook is already initialized.",0,null],[13,"NotInitialized","","MinHook is not initialized yet, or already uninitialized.",0,null],[13,"AlreadyCreated","","The hook for the specified target function is already created.",0,null],[13,"NotCreated","","The hook for the specified target function is not created yet.",0,null],[13,"AlreadyEnabled","","The hook for the specified target function is already enabled.",0,null],[13,"Disabled","","The hook for the specified target function is not enabled yet, or\nalready disabled.",0,null],[13,"NotExecutable","","The specified pointer is invalid. It points the address of non-allocated\nand/or non-executable region.",0,null],[13,"UnsupportedFunction","","The specified target function cannot be hooked.",0,null],[13,"MemoryAlloc","","Failed to allocate memory.",0,null],[13,"MemoryProtect","","Failed to change the memory protection.",0,null],[13,"ModuleNotFound","","The specified module is not loaded.",0,null],[13,"FunctionNotFound","","The specified function is not found.",0,null],[13,"InvalidModuleName","","The specified module name is invalid.",0,null],[13,"InvalidFunctionName","","The specified function name is invalid.",0,null],[4,"FunctionId","","A function identifier used for dynamically looking up a function.",null,null],[13,"Ordinal","","The function&#39;s ordinal value.",1,null],[13,"Name","","The function&#39;s name.",1,null],[11,"eq","","",0,null],[11,"fmt","","",0,null],[11,"clone","","",0,null],[11,"from_status","","Constructs an `Error` from a MinHook status.",0,{"inputs":[{"name":"mh_status"}],"output":{"name":"option"}}],[11,"description","","",0,null],[11,"fmt","","",0,null],[0,"function","","Module containing information about hookable functions.",null,null],[3,"FnPointer","minhook::function","An untyped function pointer.",null,null],[8,"Function","","Trait representing a function that can be used as a target function or detour function for\nhooking.",null,null],[16,"Unsafe","","Unsafe version of this function.",2,null],[16,"Args","","The argument types as a tuple.",2,null],[16,"Output","","The return type.",2,null],[18,"ARITY","","The function&#39;s arity (number of arguments).",2,null],[10,"from_ptr","","Constructs a `Function` from an untyped function pointer.",2,{"inputs":[{"name":"fnpointer"}],"output":{"name":"self"}}],[10,"to_ptr","","Returns a untyped function pointer for this function.",2,null],[10,"to_unsafe","","Returns this function as its unsafe variant.",2,null],[8,"UnsafeFunction","","Trait representing an unsafe function.",null,null],[8,"HookableWith","","Marker trait indicating that the function `Self` can be hooked by the given function `D`.",null,null],[11,"eq","","",3,null],[11,"ne","","",3,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"from_raw","","Creates a function pointer from a raw pointer.",3,null],[11,"to_raw","","Returns function pointer as a raw pointer.",3,null],[11,"fmt","","",3,null],[0,"panic","minhook","Panic handling for panics caught at foreign code boundaries in detour functions.",null,null],[3,"DetourPanicInfo","minhook::panic","A struct providing information about a panic that happened inside of a guarded detour function.",null,null],[5,"set_handler","","Registers a custom detour panic handler, replacing any that was previously\nregistered.",null,{"inputs":[{"name":"f"}],"output":null}],[5,"take_handler","","Unregisters the current panic handler, returning it.",null,{"inputs":[],"output":{"name":"box"}}],[11,"fmt","","",4,null],[11,"clone","","",4,null],[11,"payload","","Returns the payload associated with the panic.",4,null],[11,"detour","","Returns the name of the static hook for which the detour function\npanicked.",4,null],[6,"Result","minhook","Result type for most functions and methods in this module.",null,null],[11,"default","","",5,{"inputs":[],"output":{"name":"hookqueue"}}],[11,"fmt","","",5,null],[11,"new","","Create a new empty queue.",5,{"inputs":[],"output":{"name":"hookqueue"}}],[11,"enable","","Queue the given hook to be enabled.",5,null],[11,"disable","","Queue the given hook to be disabled.",5,null],[11,"apply","","Applies all the changes in this queue at once.",5,null],[11,"fmt","","",6,null],[11,"create","","Create a new hook given a target function and a compatible detour function.",6,{"inputs":[{"name":"t"},{"name":"d"}],"output":{"name":"result"}}],[11,"create_api","","Create a new hook given the name of the module, the name of the function symbol and a\ncompatible detour function.",6,{"inputs":[{"name":"m"},{"name":"functionid"},{"name":"d"}],"output":{"name":"result"}}],[11,"trampoline","","Returns a pointer to the trampoline function.",6,null],[11,"enable","","Enables this hook.",6,null],[11,"disable","","Disables this hook.",6,null],[11,"drop","","",6,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",1,null],[11,"ordinal","","Create a function identifier given it&#39;s ordinal value.",1,{"inputs":[{"name":"u16"}],"output":{"name":"functionid"}}],[11,"name","","Create a function identifier given it&#39;s string name.",1,{"inputs":[{"name":"n"}],"output":{"name":"functionid"}}],[11,"trampoline","","Returns a reference to the trampoline function.",7,null],[11,"initialize","","Initialize and install the underlying hook using a detour closure.",7,null],[11,"deref","","",7,null],[11,"initialize","","Initialize and install the underlying hook.",8,null],[11,"deref","","",8,null],[14,"static_hooks!","","Defines one or more static hooks.",null,null]],"paths":[[4,"Error"],[4,"FunctionId"],[8,"Function"],[3,"FnPointer"],[3,"DetourPanicInfo"],[3,"HookQueue"],[3,"Hook"],[3,"StaticHook"],[3,"StaticHookWithDefault"]]};
initSearch(searchIndex);
