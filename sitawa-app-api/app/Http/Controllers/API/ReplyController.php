<?php

namespace App\Http\Controllers\API;

use App\Models\Reply;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ReplyResource;
use Illuminate\Support\Facades\Validator;

class ReplyController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get all reply
        $reply = Reply::all();

        //return collection of reply as a resource
        return new ReplyResource(true, 'List Data Reply', $reply);
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        //define validation rules
        $validator = Validator::make($request->all(), [
            'complaint_id' => 'required',
            'user_id' => 'required',
            'message' => 'required|string',
            'status' => 'required|string',
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //create reply
        $reply = Reply::create([
            'complaint_id' => $request->input('complaint_id'),
            'user_id' => $request->input('user_id'),
            'message' => $request->input('message'),
            'status' => $request->input('status', 'diproses'),
        ]);

        //return response
        return new ReplyResource(true, 'Data Reply Berhasil Ditambahkan!', $reply);
    }

    /**
     * show
     *
     * @param  mixed $id
     * @return void
     */
    public function show($id)
    {
        $reply = Reply::with('complaint')->findOrFail($id);

        //return single reply as a resource
        return new ReplyResource(true, 'Detail Data reply!', $reply);
    }
    
    /**
     * update
     *
     * @param  mixed $request
     * @param  mixed $id
     * @return void
     */
    public function update(Request $request, $id)
    {
        //define validation rules
        $validator = Validator::make($request->all(), [
            'message' => 'required|string',
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //find post by ID
        $reply = Reply::find($id);

        // update
        $reply->update([
            'message' => $request->input('message'),
        ]);

        //return response
        return new ReplyResource(true, 'Data reply Berhasil Diubah!', $reply);
    }

}
